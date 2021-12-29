export  const  state  = () => ({
    endSidebarState:  true,
});

export  const  mutations  = {
    toggle(state) {
        state.endSidebarState  =  !state.endSidebarState;
    }
};

export  const  getters  = {
    getEndSidebarState(state) {
        return  state.endSidebarState;
    }
};
