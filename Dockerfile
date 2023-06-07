# Corre una instalacion de node:12
FROM node:12
#le decimos que el workriectory sea /app
WORKDIR /app
# copia el package.json dentro de nuestra imagen
COPY package*.json ./
# instala las dependencias de nuestro package.json
RUN npm install
# copiar todo dentro de nuestra imagen
COPY . .
# creamos variable del puerto que vamos a utilizar
ENV PORT=3000
# Exponemos el puerto en si para que nosotros mismo podamos acceder desde nuestra propia maquina
EXPOSE 3000
# inicializamos el contenedor
CMD [ "npm", "start" ]