export const Waktu = {
    tunggu: (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }
}