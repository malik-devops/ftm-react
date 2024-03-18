### yarn install

### yarn start

## docker

Docker is a platform designed to help developers build, share, and run container applications.

We will start by build the image.
 ```docker build -t react-project .```

Check if the image is built.
 ```docker images```

To verify if the image is built successfully.
```docker run -p 3000:80 -d react-project```

Check if the image is running successfully.
 ```docker ps```

Tag the image.
 ```docker tag react-project:latest <user-name>/product-ui:latest```

Check if the image is created
 ```docker images```

Push the image on dockerhub repository.
 ```docker push <user-name>/product-ui:latest```

# ftm-react
