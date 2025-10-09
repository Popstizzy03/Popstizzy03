# more useful version of the tqdm library to get more familiar with tqdm
import time
import random
from tqdm import tqdm

def download_simulation(files):
    total_bytes = sum(file['size'] for file in files)
    
    with tqdm(total=total_bytes, unit='B', unit_scale=True, desc="Total Progress") as total_pbar:
        for file in files:
            file_name = file['name']
            file_size = file['size']
            
            # Create a nested progress bar for each file
            with tqdm(total=file_size, unit='B', unit_scale=True, 
                     desc=f"Downloading {file_name}", leave=False) as file_pbar:
                
                downloaded = 0
                while downloaded < file_size:
                    # Simulate variable download speed
                    chunk_size = random.randint(10000, 1000000)  # Random chunk between 10KB and 1MB
                    chunk_size = min(chunk_size, file_size - downloaded)
                    
                    # Simulate network delay
                    time.sleep(chunk_size / 2000000)  # Larger chunks take more time
                    
                    # Update progress bars
                    downloaded += chunk_size
                    file_pbar.update(chunk_size)
                    total_pbar.update(chunk_size)
            
            print(f"✅ {file_name} downloaded successfully ({file_size / 1048576:.2f} MB)")
    
    print("All files downloaded successfully!")

# Define some mock files with names and sizes (in bytes)
files_to_download = [
    {'name': 'document.pdf', 'size': 2 * 1024 * 1024},  # 2MB
    {'name': 'image.jpg', 'size': 5 * 1024 * 1024},     # 5MB
    {'name': 'video.mp4', 'size': 15 * 1024 * 1024},    # 15MB
]

print("Starting download process...")
download_simulation(files_to_download)
