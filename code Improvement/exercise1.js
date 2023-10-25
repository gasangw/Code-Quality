const calculateAverage = (numbers) => {
    let sum = 0, count = 0;
    for (const number_ of numbers) {
      sum += number_;
      count++;
    }
    return (sum / count);
}