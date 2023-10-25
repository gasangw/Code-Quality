function calculateMatrixSum(matrix) {
    const sum = 0;
    for (const index = 0; index < matrix.length; index++)
      for (const index_ = 0; index_ < matrix[index].length; index_++)
        sum += matrix[index][index_];
    return sum;
}