# Simple progress bar in python 
import time 
from tqdm import tqdm

for i in tqdm(range(0, 50)):
    time.sleep(0.1)
