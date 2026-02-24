use std::thread;
use std::time::Duration;

fn main() {
    let mut handles = vec![];

    // Spawn 5 threads to do "cool" work concurrently
    for i in 0..5 {
        let handle = thread::spawn(move || {
            let duration = 1000 - (i * 150); // Each thread takes different time
            thread::sleep(Duration::from_millis(duration));
            format!("Thread {} finished after {}ms", i, duration)
        });
        handles.push(handle);
    }

    // Wait for all threads to finish and collect results
    for handle in handles {
        let result = handle.join().unwrap();
        println!("{}", result);
    }

    println!("All tasks completed safely!");
}
