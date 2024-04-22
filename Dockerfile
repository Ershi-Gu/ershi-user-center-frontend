# 依赖基础镜像 nginx
FROM nginx

# 指定工作目录
WORKDIR /usr/share/nginx/html/
# 指定使用用户
USER root

# 将 docker 容器需要的 nginx 配置文件覆盖基础 nginx 镜像（/etc/ 基本都是基础 nginx 配置）的配置文件
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

# 代码包拷贝到 nginx 工作目录
COPY ./dist  /usr/share/nginx/html/

# 注释, 告诉开发者使用80端口，无实际操作意义
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
