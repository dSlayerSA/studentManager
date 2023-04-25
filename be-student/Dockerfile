# Definir imagem base
FROM php:8.0-apache

# Atualizar e instalar pacotes
RUN apt-get update && \
    apt-get install -y \
        libmcrypt-dev \
        libjpeg-dev \
        libpng-dev \
        libpq-dev \
        libxml2-dev \
        git \
        zip \
        unzip \
        && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Instalar extensões PHP
RUN docker-php-ext-install \
        pdo \
        pdo_mysql \
        mysqli \
        gd \
        opcache \
        && \
    pecl install mcrypt && \
    docker-php-ext-enable mcrypt

# Habilitar mod_rewrite do Apache
RUN a2enmod rewrite

# Copiar arquivo de configuração do Apache
COPY ./src/apache2.conf /etc/apache2/apache2.conf

# Copiar código do projeto para o contêiner
COPY . /var/www/html

# Configurar permissões de arquivos
RUN chown -R www-data:www-data /var/www/html && \
    chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Definir diretório de trabalho
WORKDIR /var/www/html

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Instalar dependências do Composer
RUN composer install --no-interaction

#ajuste apache2
RUN sed -ri -e "s@/var/www/html@/var/www/html/public@g" /etc/apache2/sites-available/000-default.conf

# Expor porta do Apache
EXPOSE 80

# Comando padrão ao iniciar o contêiner
CMD ["apache2-foreground"]