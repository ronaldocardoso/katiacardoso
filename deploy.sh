#!/bin/bash

# Exit on any error
set -e

echo "🚀 Iniciando build de produção..."
npm run build

echo "📦 Criando pacote site.zip..."
# Remove zip antigo se existir
rm -f site.zip
# Compacta a pasta de build
(cd out && zip -rq ../site.zip .)

echo "📤 Enviando para o servidor Hostinger via SCP..."
scp -P 65002 site.zip u743550134@185.173.111.162:domains/katiapsicoterapeuta.com.br/public_html/

echo "🔧 Extraindo arquivos no servidor..."
ssh -p 65002 u743550134@185.173.111.162 "cd domains/katiapsicoterapeuta.com.br/public_html && unzip -qo site.zip && rm site.zip"

echo "🧹 Limpando arquivos locais temporários..."
rm site.zip

echo "✅ Implantação concluída com sucesso!"
