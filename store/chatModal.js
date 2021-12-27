export  const  state  = () => ({
    chatModal:  false
});

export  const  mutations  = {
    toggle(state) {
        state.chatModal  =  !state.chatModal;
    }
};

export  const  getters  = {
    getChatModalState(state) {
        return  state.chatModal;
    }
};
