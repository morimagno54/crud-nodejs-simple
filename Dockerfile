# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en la aplicación
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos de la aplicación
COPY . .

# Expón el puerto 3000 (o el puerto que estés usando en tu aplicación)
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
