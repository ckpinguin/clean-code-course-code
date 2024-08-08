from datetime import datetime


class BlogPost:
    def __init__(self, title, description, publish_date):
        self.title = title
        self.description = description
        self.publish_date = publish_date

    def print(self):
        print('Title: ' + self.title)
        print('Description: ' + self.description)
        print('Published: ' + self.publish_date)


summary = 'Clean Code Is Great!'
description = 'Actually, writing Clean Code can be pretty fun. You\'ll see!'
now = datetime.now()
formatted_date = now.strftime('%Y-%m-%d %H:%M')

blog_post = BlogPost(summary, description, formatted_date)

blog_post.print()
