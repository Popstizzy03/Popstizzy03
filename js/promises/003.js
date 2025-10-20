function asyncOperation(): Promise<string> {
    return new Promise((resolve, reject) => {
        // Simulate an async operation using setTimeout
        setTimeout(() => {
            const success = true; // Change this to false to simulate an error

            if (success) {
                resolve("Operation succeeded!");
            } else {
                reject("Operation failed!");
            }
        }, 1000);
    });
}
