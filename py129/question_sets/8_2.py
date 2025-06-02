class MP3File:
    def __init__(self, name):
        self.name = name
    
    def play(self):
        print(f"Play {self.__class__.__name__}: {self.name}")

class WAVFile:
    def __init__(self, name):
        self.name = name
    
    def play(self):
        print(f"Play {self.__class__.__name__}: {self.name}")

class FLACFile:
    def __init__(self, name):
        self.name = name
    
    def play(self):
        print(f"Play {self.__class__.__name__}: {self.name}")


# First approach (non-duck typing with conditional checks)
def play_audio_files(files):
    for file in files:
        if isinstance(file, MP3File):
            print(f"Play {file.__class__.__name__}: {file.name}")
        if isinstance(file, WAVFile):
            print(f"Play {file.__class__.__name__}: {file.name}")
        if isinstance(file, FLACFile):
            print(f"Play {file.__class__.__name__}: {file.name}")

# Second approach (using duck typing)
def play_audio_files_duck(files):
    for file in files:
        file.play()

# Both implementations should work with this:
audio_files = [MP3File("song.mp3"), WAVFile("recording.wav"), FLACFile("high_quality.flac")]
play_audio_files(audio_files)
play_audio_files_duck(audio_files)