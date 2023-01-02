import create from 'zustand'


const useDataStore = create(set => ({
    data: {},

    setData: (data_) => set(state => ({ data: data_ })),
}))


export default useDataStore;