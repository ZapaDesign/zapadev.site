export  const  state  = () => ({
    startSidebarState:  true,
});

export  const  mutations  = {
    toggle(state) {
        state.startSidebarState  =  !state.startSidebarState;
    }
};

export  const  getters  = {
    getStartSidebarState(state) {
        return  state.startSidebarState;
    }
};
