import create from 'zustand'


const useIdentStore = create(set => ({
    trackingID: "",
    referenceID: "",

    setTrackingID: (trackingID_) => set(state => ({ trackingID: trackingID_ })),
    setReferenceID: (referenceID_) => set(state => ({ referenceID: referenceID_ })),
    
}))


export default useIdentStore;