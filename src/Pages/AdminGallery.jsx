import { useState, useEffect } from 'react';
import { 
  FaPlus, 
  FaUpload, 
  FaTrash, 
  FaTimes,
  FaImage,
  FaChevronLeft,
  FaChevronRight,
  FaSpinner,
  FaTimesCircle
} from 'react-icons/fa';

const AdminGallery = () => {
  const [images, setImages] = useState([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const imagesPerPage = 8;

  // Mock initial data
  const mockImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80',
      date: '2024-01-15',
      name: 'art-class.jpg'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=800&q=80',
      date: '2024-01-10',
      name: 'playground.jpg'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80',
      date: '2024-01-08',
      name: 'music-session.jpg'
    }
  ];

  // Load initial images
  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setImages(mockImages);
      setLoading(false);
    };
    loadImages();
  }, []);

  // Handle file selection
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (JPG, PNG, GIF, etc.)');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size should be less than 5MB');
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Handle upload
  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select an image to upload');
      return;
    }

    setUploading(true);

    try {
      // Simulate upload process
      await new Promise(resolve => setTimeout(resolve, 1500));

      const newImage = {
        id: images.length + 1,
        url: previewUrl,
        date: new Date().toISOString().split('T')[0],
        name: selectedFile.name
      };

      setImages(prev => [newImage, ...prev]);
      
      // Reset form
      setSelectedFile(null);
      setPreviewUrl('');
      setIsUploadModalOpen(false);
      
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  // Handle delete
  const handleDelete = (image) => {
    setSelectedImage(image);
    setIsDeleteModalOpen(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    if (!selectedImage) return;

    setDeleting(true);
    try {
      // Simulate delete process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setImages(prev => prev.filter(img => img.id !== selectedImage.id));
      setIsDeleteModalOpen(false);
      setSelectedImage(null);
      
      alert('Image deleted successfully!');
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete image. Please try again.');
    } finally {
      setDeleting(false);
    }
  };

  // Pagination
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
              <p className="text-maroon-200 font-sans mt-1">Little Vile Preschool - Admin Panel</p>
            </div>
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="mt-4 md:mt-0 bg-white text-maroon-900 hover:bg-maroon-50 font-medium py-2 px-6 rounded-lg transition-colors flex items-center space-x-2"
            >
              <FaPlus />
              <span>Upload Image</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 md:p-6">
        {/* Gallery Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-maroon-600" />
            <span className="ml-3 text-maroon-700 font-sans">Loading gallery...</span>
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
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={image.url}
                      alt="Gallery image"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(image)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                      title="Delete image"
                    >
                      <FaTrash className="text-sm" />
                    </button>
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-sans text-sm text-gray-600 truncate">{image.name}</p>
                        <p className="font-sans text-xs text-gray-400 mt-1">Uploaded: {image.date}</p>
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

            {/* Summary */}
            <div className="mt-8 text-center text-gray-600 font-sans">
              Showing {currentImages.length} of {images.length} images
            </div>
          </>
        )}
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            {/* Modal Header */}
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

            {/* Modal Content */}
            <div className="p-6">
              {/* File Upload Area */}
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
                          {selectedFile?.name} ({(selectedFile?.size / (1024 * 1024)).toFixed(2)} MB)
                        </p>
                      </div>
                    ) : (
                      <>
                        <FaUpload className="text-4xl text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2 font-sans">
                          Click to select an image
                        </p>
                        <p className="text-sm text-gray-500">
                          Supports JPG, PNG, GIF • Max 5MB
                        </p>
                      </>
                    )}
                  </label>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
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

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="p-6 text-center">
              <FaTimesCircle className="text-5xl text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-2">
                Delete Image?
              </h2>
              <p className="text-gray-600 font-sans mb-6">
                Are you sure you want to delete this image?
                <br />
                <span className="font-semibold text-sm">{selectedImage.name}</span>
                <br />
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