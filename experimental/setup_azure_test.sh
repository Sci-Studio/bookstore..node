#!/usr/bin/env bash

# -----------------------------
# Variables (change as needed)
# -----------------------------
RG="bookstore-rg"
LOCATION="northeurope"

# -----------------------------
# Resource group
# -----------------------------
az group create --name $RG --location $LOCATION