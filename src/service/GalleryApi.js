// src/service/GalleryApi.js
import API_BASE_URL from "./base_urls"; // your base URL constant (e.g. 'https://little-ville-backend.onrender.com' or localhost)

class GalleryApi {
  // Helper: Get auth headers (use token from localStorage or cookie)
  static getAuthHeaders() {
    const token = localStorage.getItem('auth_token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  // GET all gallery images
  static async getAllImages() {
    try {
      const response = await fetch(`${API_BASE_URL}/gallery`, {
        method: 'GET',
        credentials: 'include', // if using httpOnly cookies
        headers: {
          'Content-Type': 'application/json',
          ...this.getAuthHeaders(),
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch gallery images');
      }

      const data = await response.json();
      return data.images || [];
    } catch (error) {
      console.error('Get images error:', error);
      throw error;
    }
  }

  // POST - Upload new image
  static async uploadImage(file) {
    try {
      if (!file) throw new Error('No file selected');

      const formData = new FormData();
      formData.append('image', file); // field name must match backend multer .single('image')

      const response = await fetch(`${API_BASE_URL}/gallery`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
        headers: {
          ...this.getAuthHeaders(),
          // Do NOT set Content-Type → browser sets multipart/form-data automatically
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const data = await response.json();
      return data.image; // returns the newly created image object
    } catch (error) {
      console.error('Upload image error:', error);
      throw error;
    }
  }

  // PUT - Replace existing image
  static async replaceImage(imageId, file) {
    try {
      if (!file || !imageId) throw new Error('Missing file or image ID');

      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch(`${API_BASE_URL}/gallery/${imageId}`, {
        method: 'PUT',
        body: formData,
        credentials: 'include',
        headers: {
          ...this.getAuthHeaders(),
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Replace failed');
      }

      const data = await response.json();
      return data.image; // updated image object
    } catch (error) {
      console.error('Replace image error:', error);
      throw error;
    }
  }

  // DELETE - Remove image
  static async deleteImage(imageId) {
    try {
      const response = await fetch(`${API_BASE_URL}/gallery/${imageId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          ...this.getAuthHeaders(),
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Delete failed');
      }

      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Delete image error:', error);
      throw error;
    }
  }

  // Optional: Check if user is authenticated (for gallery page protection)
  static isAuthenticated() {
    return !!localStorage.getItem('auth_token');
  }
}

export default GalleryApi;