class Point:
    def __init__(self, x: int, y: int):
        self.x: int = x
        self.y: int = y


class Rectangle:
    def __init__(self, top_left: Point, width: int, height: int):
        self.top_left: int = top_left
        self.width: int = width
        self.height: int = height

    def area(self) -> int:
        return self.width * self.height

    def end_points(self) -> None:
        top_right = self.top_left.x + self.width
        bottom_left = self.top_left.y - self.height
        print('Starting Point (X)): ' + str(self.top_left.x))
        print('Starting Point (Y)): ' + str(self.top_left.y))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


def create_rectangle() -> Rectangle:
    top_left = Point(50, 100)
    rectangle = Rectangle(top_left, width=90, height=10)

    return rectangle


rectangle = create_rectangle()

print(rectangle.area())
rectangle.end_points()
