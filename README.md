# Blog Theme

This is a simple, but modern, blog theme for DJ Press.

## Requirements

This can only be used on sites running DJ Press v0.23 or newer.

## Installation

1. Add the theme to your site's dependencies and install it like any other Python package.
2. Add the theme to `INSTALLED_APPS` in your Django config:
    ```python
    INSTALLED_APPS = [
        ...
        "djpress_blog_theme",
    ]
    ```
3. Then configure the `THEME` setting in the `DJPRESS_SETTINGS` dictionary in your Django config with the theme name:

    ```python
    DJPRESS_SETTINGS = {
        "THEME": "djpress_blog_theme",
    }
    ```

## Configuration

The following optional settings are supported:

- `sidebar_position`: By default, the sidebar will be on the left-hand side. You can optionally set this to `"right"` to move the sidebar to the right.
- `avatar_url`: Configure this to a URL of your avatar picture, and it will show in the sidebar as a 120x120 pixel round image.
- `mastodon_profile`: If you have a Mastodon profile, set this to the **URL** to your profile and it will show in the sidebar.
- `github_username`: If you have a GitHub profile, set this to the **username** of your profile and it will show in the sidebar.
- `linkedin_username`: If you have a LinkedIn profile, set this to the **username** to your profile and it will show in the sidebar.
- `x_username`: If you have an X profile, set this to the **username** to your profile and it will show in the sidebar.
- `copyright_message`: You can override the copyright message in the sidebar which is set to the following by default: `"© {% now "Y" %} All rights reserved."`. Note that the text you configure here is marked as safe in the template, so you can use HTML tags.
- `bg-sidebar`: The color of the sidebar in light mode.
- `dark-bg-sidebar`: The color of the sidebar in dark mode.

Configure these settings in the `THEME_SETTINGS` dictionary object in your DJ Press config. For example:

```python
DJPRESS_SETTINGS = {
    "THEME": "djpress_blog_theme",
    "THEME_SETTINGS": {
        "djpress_blog_theme": {
            "sidebar_position": "right",
            "avatar_url": "/static/img/avatar.jpg",
            "copyright_message": 'Content is <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> – share away!',
        },
    },
}
```
