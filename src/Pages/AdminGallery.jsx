import { useState, useEffect } from 'react';
import { 
  FaPlus, FaUpload, FaTrash, FaTimes,
  FaImage, FaChevronLeft, FaChevronRight,
  FaSpinner, FaTimesCircle, FaEdit, FaSignOutAlt
} from 'react-icons/fa';
import GalleryApi from '../service/GalleryApi'; 
import { useNavigate } from 'react-router-dom';   

const AdminGallery = () => {
  const [images, setImages] = useState([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [editFile, setEditFile] = useState(null);
  const [editPreviewUrl, setEditPreviewUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const imagesPerPage = 8;
  const navigate = useNavigate();

  
useEffect(() => {
  const fetchImages = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedImages = await GalleryApi.getAllImages();
      
      const formatted = fetchedImages.map(img => {
        let dateStr = 'Unknown date';

        if (img.uploadedAt && typeof img.uploadedAt === 'string') {
          dateStr = img.uploadedAt;
        }
        else if (typeof img.timestamp === 'number' && !isNaN(img.timestamp)) {
          try {
            dateStr = new Date(img.timestamp).toISOString().split('T')[0];
          } catch {
            dateStr = 'Invalid date';
          }
        }

        return {
          id: img.id,
          url: img.url,
          name: img.name,
          date: dateStr,
        };
      });

      setImages(formatted);
    } catch (err) {
      console.error('Failed to load gallery:', err);
      setError(err.message || 'Failed to load gallery images');
    } finally {
      setLoading(false);
    }
  };

  fetchImages();
}, []);

  // File selection for upload
  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (JPG, PNG, GIF, etc.)');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('File size should be less than 5MB');
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setPreviewUrl(reader.result);
    reader.readAsDataURL(file);
  };

  // File selection for replace/edit
  const handleEditFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('File size should be less than 5MB');
      return;
    }

    setEditFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setEditPreviewUrl(reader.result);
    reader.readAsDataURL(file);
  };

  // Upload new image
  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select an image to upload');
      return;
    }

    setUploading(true);
    try {
      const newImage = await GalleryApi.uploadImage(selectedFile);
      
      setImages(prev => [newImage, ...prev]);
      setIsUploadModalOpen(false);
      setSelectedFile(null);
      setPreviewUrl('');
      alert('Image uploaded successfully!');
    } catch (err) {
      alert(err.message || 'Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  // Replace existing image
  const saveEdit = async () => {
    if (!selectedImage || !editFile) {
      alert('Please select a new image to replace the existing one');
      return;
    }

    setEditing(true);
    try {
      const updatedImage = await GalleryApi.replaceImage(selectedImage.id, editFile);
      
      setImages(prev => 
        prev.map(img => 
          img.id === selectedImage.id ? updatedImage : img
        )
      );

      setIsEditModalOpen(false);
      setSelectedImage(null);
      setEditFile(null);
      setEditPreviewUrl('');
      alert('Image replaced successfully!');
    } catch (err) {
      alert(err.message || 'Failed to replace image');
    } finally {
      setEditing(false);
    }
  };

  // Delete image
  const confirmDelete = async () => {
    if (!selectedImage) return;

    setDeleting(true);
    try {
      await GalleryApi.deleteImage(selectedImage.id);
      setImages(prev => prev.filter(img => img.id !== selectedImage.id));
      setIsDeleteModalOpen(false);
      setSelectedImage(null);
      alert('Image deleted successfully!');
    } catch (err) {
      alert(err.message || 'Failed to delete image');
    } finally {
      setDeleting(false);
    }
  };

  // Open edit modal
  const handleEdit = (image) => {
    setSelectedImage(image);
    setEditFile(null);
    setEditPreviewUrl('');
    setIsEditModalOpen(true);
  };

  // Open delete confirmation
  const handleDelete = (image) => {
    setSelectedImage(image);
    setIsDeleteModalOpen(true);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      navigate('/login');
    }
  };

  // Pagination logic
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-maroon-900 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold font-serif">Gallery Management</h1>
              <p className="text-maroon-200 font-sans mt-1">Little Ville Preschool - Admin Panel</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0 gap-10">
              
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="bg-white text-maroon-900 hover:bg-maroon-50 font-medium py-2 px-6 rounded-lg transition-colors flex items-center space-x-2"
              >
                <FaPlus />
                <span>Upload Image</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-sans"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 md:p-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-maroon-600" />
            <span className="ml-3 text-maroon-700 font-sans">Loading gallery...</span>
          </div>
        ) : error ? (
          <div className="text-center py-16 text-red-600">
            <p className="text-xl font-bold">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-6 py-2 bg-maroon-600 text-white rounded-lg"
            >
              Retry
            </button>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <FaImage className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-600 font-serif mb-2">No Images Found</h3>
            <p className="text-gray-500 font-sans mb-6">
              Upload your first image to get started
            </p>
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="bg-maroon-600 hover:bg-maroon-700 text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center space-x-2 mx-auto"
            >
              <FaUpload />
              <span>Upload Image</span>
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              {currentImages.map((image) => (
                <div key={image.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={image.url}
                      alt={image.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.target.src = '/fallback-image.jpg'; }} // optional fallback
                    />
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <button
                        onClick={() => handleEdit(image)}
                        className="bg-blue-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-600"
                        title="Replace image"
                      >
                        <FaEdit className="text-sm" />
                      </button>
                      <button
                        onClick={() => handleDelete(image)}
                        className="bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                        title="Delete image"
                      >
                        <FaTrash className="text-sm" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-sans text-sm text-gray-600 truncate">{image.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed bg-white border border-maroon-200 text-maroon-700 hover:bg-maroon-50"
                >
                  <FaChevronLeft />
                </button>
                
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg font-sans ${
                        currentPage === page
                          ? 'bg-maroon-600 text-white'
                          : 'bg-white text-maroon-700 border border-maroon-200 hover:bg-maroon-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed bg-white border border-maroon-200 text-maroon-700 hover:bg-maroon-50"
                >
                  <FaChevronRight />
                </button>
              </div>
            )}

            
          </>
        )}
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-maroon-900 font-serif">Upload Image</h2>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
                disabled={uploading}
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                  Select Image
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-maroon-400 transition-colors">
                  <input
                    type="file"
                    id="file-upload"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    disabled={uploading}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    {previewUrl ? (
                      <div className="space-y-4">
                        <div className="relative mx-auto">
                          <img
                            src={previewUrl}
                            alt="Preview"
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setPreviewUrl('');
                              setSelectedFile(null);
                            }}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                          >
                            <FaTimesCircle />
                          </button>
                        </div>
                        <p className="text-sm text-gray-600">
                          {selectedFile?.name} ({(selectedFile?.size / 1024 / 1024).toFixed(2)} MB)
                        </p>
                      </div>
                    ) : (
                      <>
                        <FaUpload className="text-4xl text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2 font-sans">Click to select an image</p>
                        <p className="text-sm text-gray-500">JPG, PNG, GIF • Max 5MB</p>
                      </>
                    )}
                  </label>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex justify-end space-x-4">
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-sans"
                disabled={uploading}
              >
                Cancel
              </button>
              <button
                onClick={handleUpload}
                disabled={uploading || !selectedFile}
                className="px-6 py-2 bg-maroon-600 text-white rounded-lg hover:bg-maroon-700 disabled:opacity-50 disabled:cursor-not-allowed font-sans flex items-center space-x-2"
              >
                {uploading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>Uploading...</span>
                  </>
                ) : (
                  <>
                    <FaUpload />
                    <span>Upload</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-maroon-900 font-serif">Replace Image</h2>
              <button
                onClick={() => {
                  setIsEditModalOpen(false);
                  setSelectedImage(null);
                  setEditFile(null);
                  setEditPreviewUrl('');
                }}
                className="text-gray-400 hover:text-gray-600"
                disabled={editing}
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3 font-sans">Current Image</h3>
                <div className="border border-gray-200 rounded-lg p-3">
                  <img
                    src={selectedImage.url}
                    alt="Current"
                    className="w-full h-48 object-cover rounded-lg mb-2"
                  />
                  <div className="text-center">
                    <p className="text-sm text-gray-600 font-sans">{selectedImage.name}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3 font-sans">Select New Image</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                  <input
                    type="file"
                    id="edit-file-upload"
                    accept="image/*"
                    onChange={handleEditFileSelect}
                    className="hidden"
                    disabled={editing}
                  />
                  <label htmlFor="edit-file-upload" className="cursor-pointer">
                    {editPreviewUrl ? (
                      <div className="space-y-4">
                        <div className="relative mx-auto">
                          <img
                            src={editPreviewUrl}
                            alt="New preview"
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setEditPreviewUrl('');
                              setEditFile(null);
                            }}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                            disabled={editing}
                          >
                            <FaTimesCircle />
                          </button>
                        </div>
                        <p className="text-sm text-gray-600">
                          {editFile?.name} ({(editFile?.size / 1024 / 1024).toFixed(2)} MB)
                        </p>
                      </div>
                    ) : (
                      <>
                        <FaUpload className="text-4xl text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2 font-sans">Click to select replacement image</p>
                        <p className="text-sm text-gray-500">JPG, PNG, GIF • Max 5MB</p>
                      </>
                    )}
                  </label>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex justify-end space-x-4">
              <button
                onClick={() => {
                  setIsEditModalOpen(false);
                  setSelectedImage(null);
                  setEditFile(null);
                  setEditPreviewUrl('');
                }}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-sans"
                disabled={editing}
              >
                Cancel
              </button>
              <button
                onClick={saveEdit}
                disabled={editing || !editFile}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-sans flex items-center space-x-2"
              >
                {editing ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>Replacing...</span>
                  </>
                ) : (
                  <>
                    <FaEdit />
                    <span>Replace Image</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {isDeleteModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="p-6 text-center">
              <FaTimesCircle className="text-5xl text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-2">
                Delete Image?
              </h2>
              <p className="text-gray-600 font-sans mb-6">
                Are you sure you want to delete this image?<br />
                <span className="font-semibold text-sm">{selectedImage.name}</span><br />
                This action cannot be undone.
              </p>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => {
                    setIsDeleteModalOpen(false);
                    setSelectedImage(null);
                  }}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-sans"
                  disabled={deleting}
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  disabled={deleting}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed font-sans flex items-center space-x-2"
                >
                  {deleting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      <span>Deleting...</span>
                    </>
                  ) : (
                    <>
                      <FaTrash />
                      <span>Delete</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminGallery;