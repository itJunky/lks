FROM python:3.7-alpine
ENV PYTHONUNBUFFERED 1

RUN mkdir /backend
WORKDIR /backend

## for pgsql
RUN apk update && \
    apk add --virtual build-deps gcc python3-dev musl-dev && \
    apk add postgresql-dev
# for Pillow
RUN apk add --no-cache jpeg-dev zlib-dev


ADD requirements.txt /backend/
RUN pip3 install -r requirements.txt

## bash for dev mode
RUN apk add --update bash && rm -rf /var/cache/apk/*

ADD ./backend /backend/

#WORKDIR /backend

