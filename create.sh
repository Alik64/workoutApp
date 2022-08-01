#!/bin/sh

echo -e ">>>>: Укажите имя компонента с большой буквы?\n"

read name

echo -e "\n>>: Имя вашего компонента $name\n\n"

echo -e ">>>>: Укажите путь где надо разместить компонент?\n"

read path

echo -e "\n>>: Ваш компонент $name будет создан в ./src/$path\n"

node createComponents.js $name $path
