# require additional compass plugins here
# -----------------------------------------------------------------------------

# We tell compass that we want to use. SCSS format in this case
preferred_syntax = :scss

# file paths
css_dir = "css"
sass_dir = "scss"
images_dir = "images"
javascripts_dir = "js"
relative_assets = true

output_style = :nested # :expanded or :nested or :compact or :compressed
environment = :development

# While in Dev, we can use this feature to easily debug the CSS styles
line_comments = true


# SASS core
# -----------------------------------------------------------------------------

Sass::Script::Number.precision = 7 # chrome needs a precision of 7 to round properly
