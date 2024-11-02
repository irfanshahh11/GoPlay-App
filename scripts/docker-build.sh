#!/bin/bash

# Build images
docker build -t sportspot-frontend:latest --target frontend .
docker build -t sportspot-backend:latest --target backend .

# Tag images for ECR
docker tag sportspot-frontend:latest your-aws-account.dkr.ecr.region.amazonaws.com/sportspot-frontend:latest
docker tag sportspot-backend:latest your-aws-account.dkr.ecr.region.amazonaws.com/sportspot-backend:latest

# Push to ECR
docker push your-aws-account.dkr.ecr.region.amazonaws.com/sportspot-frontend:latest
docker push your-aws-account.dkr.ecr.region.amazonaws.com/sportspot-backend:latest