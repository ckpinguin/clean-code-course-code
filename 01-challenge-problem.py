class Point:
    def __init__(self, x: int, y: int):
        self.x: int = x
        self.y: int = y


class Rectangle:
    def __init__(self, origin: Point, width: int, height: int):
        self.origin: int = origin
        self.width: int = width
        self.height: int = height

    def get_area(self) -> int:
        return self.width * self.height

    def print_coordinates(self) -> None:
        top_right = self.origin.x + self.width
        bottom_left = self.origin.y + self.height
        print('Starting Point (X)): ' + str(self.origin.x))
        print('Starting Point (Y)): ' + str(self.origin.y))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


def create_rectangle() -> Rectangle:
    origin = Point(50, 100)
    rectangle = Rectangle(origin, width=90, height=10)

    return rectangle


rectangle = create_rectangle()

print(rectangle.get_area())
rectangle.print_coordinates()
