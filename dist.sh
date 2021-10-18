if [ $# -eq 0 ]
  then
    echo "Please specify a version number."
    exit 1
fi

7z a ./dist/nf-unspoilify-$1.zip ./manifest.json ./src/ ./icon/ && echo "Distribution created successfully (version $1)." || echo "Error creating archive." && exit 1