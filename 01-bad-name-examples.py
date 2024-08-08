from datetime import datetime


class BlogPost:
    def __init__(self, title, description, publish_date):
        self.title = title
        self.description = description
        self.publish_date = publish_date


def print_blog_post(blog_post):
    print('Title: ' + blog_post.title)
    print('Description: ' + blog_post.description)
    print('Published: ' + blog_post.publish_date)


summary = 'Clean Code Is Great!'
description = 'Actually, writing Clean Code can be pretty fun. You\'ll see!'
now = datetime.now()
formatted_date = now.strftime('%Y-%m-%d %H:%M')

blog_post = BlogPost(summary, description, formatted_date)

print_blog_post(blog_post)
