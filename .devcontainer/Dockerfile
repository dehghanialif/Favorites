FROM ubuntu:oracular


ARG USERNAME=soldev
ARG USER_UID=1001
ARG USER_GID=$USER_UID

# Create the user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    #
    # Add sudo support. Omit if you don't need to install software after connecting.
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME
# Set the default user. Omit if you want to keep the default as root.
USER $USERNAME



RUN sudo apt-get install -y curl git
RUN curl --proto '=https' --tlsv1.2 -sSfL https://solana-install.solana.workers.dev | bash \
    && echo 'export PATH="/home/soldev/.local/share/solana/install/active_release/bin:$PATH"' >> ~/.bashrc
RUN PATH="/home/soldev/.local/share/solana/install/active_release/bin:$PATH" solana config set --url localhost

WORKDIR /workspace
