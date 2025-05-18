# Simple Python-based Website

This project is a Python-based conversion of a simple PHP website. It demonstrates how to migrate a PHP project to Python using the Flask framework.

## Features

- Dynamic routing and views
- Configurable navigation menu
- Template rendering with Jinja2
- Static file support (CSS, JavaScript, images)
- Error handling with a 404 page

## Installation

To run this project locally:

1. Clone the project to your local computer:
   ```bash
   git clone <repository-url>
   cd python-website-convert

python3 -m venv venv
source venv/bin/activate

pip install flask

python app.py

python-website-convert/
├── app.py                # Main Flask application
├── includes/
│   ├── config.py         # Configuration file
│   ├── functions.py      # Helper functions
├── content/
│   ├── home.phtml        # Home page content
│   ├── about-us.phtml    # About Us page content
│   ├── 404.phtml         # 404 error page content
├── static/
│   ├── css/
│   │   ├── styles.css    # CSS styles
│   ├── js/
│   │   ├── script.js     # JavaScript files
│   ├── images/           # Images
├── template/
│   ├── template.html     # Main HTML template
├── [README.md](http://_vscodecontentref_/2)             # Project documentation

Configuration
The website configuration is stored in includes/config.py. You can modify the following settings:

name: The name of the website.
site_url: The base URL of the website.
pretty_uri: Enable or disable pretty URLs.
nav_menu: Navigation menu items.
template_path: Path to the template folder.
content_path: Path to the content folder.
version: The version of the website.
License
MIT
