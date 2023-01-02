import create from 'zustand'


const useIdentStore = create(set => ({
    trackingID: "",
    referenceID: "",
    phone: "",

    setTrackingID: (trackingID_) => set(state => ({ trackingID: trackingID_ })),
    setReferenceID: (referenceID_) => set(state => ({ referenceID: referenceID_ })),
    setPhone: (phone_) => set(state => ({ phone: phone_ })),
    
}))


export default useIdentStore;