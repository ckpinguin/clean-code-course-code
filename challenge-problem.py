# (c) Maximilian Schwarzmüller / Academind GmbH
from typing import Any
from os import path, makedirs
from pathlib import Path


class DiskStorage:
    def __init__(self, directory_name: str) -> None:
        self.storage_directory: str = directory_name

    def get_directory_path(self) -> Path:
        return Path(self.storage_directory)

    def create_directory(self) -> None:
        if (not path.exists(self.get_directory_path())):
            makedirs(self.storage_directory)

    # Warning: Directory must exist in advance
    def insert_file(self, file_name: str, content: Any) -> None:
        self.create_directory()
        file = open(self.get_directory_path() / file_name, 'w')
        file.write(content)
        file.close()
        # Todo: Add proper error handling


log_storage = DiskStorage('logs')

log_storage.insert_file('test.txt', 'Test')
