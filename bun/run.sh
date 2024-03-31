read number

for ((i=0; i<$number; i++)); do
  docker run --rm -v "$PWD":/app benchmark:bun
done
