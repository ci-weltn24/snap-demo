FROM java:8u40-jdk

MAINTAINER Matthias Naber <matthias.naber@weltn24.de>

#
# Configure non-interactive frontend for dpkg/apt-get
#
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

#
# Install and generate en_US.UTF-8 locales
#
RUN apt-get update -qq \
  && apt-get install -yqq iso-codes locales \
  && echo 'en_US.UTF-8 UTF-8' > /etc/locale.gen \
  && locale-gen

#
# Configure locales in environment to en_US.UTF-8
#
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8
ENV LC_ALL en_US.UTF-8

#
# Install required packages
#
RUN apt-get install -yqq unzip

#
# Add build and extract build artifacts
#
ADD dev-build.zip /tmp/funkotron.zip
RUN unzip -uo /tmp/funkotron.zip -d /opt/funkotron/

EXPOSE 9000

WORKDIR /opt/funkotron/dev-build

CMD ["./bin/dev-build"]
