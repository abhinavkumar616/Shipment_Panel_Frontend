# FROM httpd


# # Copy the HTML files into the image

# COPY . /usr/local/apache2/htdocs/



FROM nginx:alpine

# Copy your HTML code and other assets to the appropriate location within the container

COPY . /usr/share/nginx/html

# Expose port 80 (the default port for HTTP traffic)

EXPOSE 80