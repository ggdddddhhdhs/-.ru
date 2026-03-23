const popupOpenBtn  = document.querySelector('#popup__open')
const popup = document.querySelector('.popup')
const closePopup = document.querySelector('#close-popup')

const popupOpenBtnListOne  = document.querySelector('#list_1')
const popupList1 = document.querySelector('#popup-button__1')
const closePopupList1 = document.querySelector('#close-popup__1')

const popupOpenBtnList2  = document.querySelector('#list_2')
const popupList2 = document.querySelector('#popup-button__2')
const closePopupList2 = document.querySelector('#close-popup__2')

const popupOpenBtnList3  = document.querySelector('#list_3')
const popupList3 = document.querySelector('#popup-button__3')
const closePopupList3 = document.querySelector('#close-popup__3')

const popupOpenBtnList4  = document.querySelector('#list_4')
const popupList4 = document.querySelector('#popup-button__4')
const closePopupList4 = document.querySelector('#close-popup__4')

const popupOpenBtnList5  = document.querySelector('#list_5')
const popupList5 = document.querySelector('#popup-button__5')
const closePopupList5 = document.querySelector('#close-popup__5')

const popupOpenBtnList6  = document.querySelector('#list_6')
const popupList6 = document.querySelector('#popup-button__6')
const closePopupList6 = document.querySelector('#close-popup__6')



function openPopap(element){//открытие попапа
    element.classList.add('popup-open')
}

function closePopap(element){//закрытие попапа
    element.classList.remove('popup-open')
}

popupOpenBtn.addEventListener("click", function(event){
    openPopap(popup)
    event.stopPropagation()
})

closePopup.addEventListener("click", function(event){
    closePopap(popup)
    closePopap(popupList1)
    closePopap(popupList2)
    closePopap(popupList3)
    closePopap(popupList4)
    closePopap(popupList5)
    closePopap(popupList6)
    event.stopPropagation()
})

popupOpenBtnListOne.addEventListener("click", function(event){
    openPopap(popupList1)
    event.stopPropagation()
})

closePopupList1.addEventListener("click", function(event){
    closePopap(popupList1)
    event.stopPropagation()
})

popupOpenBtnList2.addEventListener("click", function(event){
    openPopap(popupList2)
    event.stopPropagation()
})

closePopupList2.addEventListener("click", function(event){
    closePopap(popupList2)
    event.stopPropagation()
})

popupOpenBtnList3.addEventListener("click", function(event){
    openPopap(popupList3)
    event.stopPropagation()
})

closePopupList3.addEventListener("click", function(event){
    closePopap(popupList3)
    event.stopPropagation()
})

popupOpenBtnList4.addEventListener("click", function(event){
    openPopap(popupList4)
    event.stopPropagation()
})

closePopupList4.addEventListener("click", function(event){
    closePopap(popupList4)
    event.stopPropagation()
})

popupOpenBtnList5.addEventListener("click", function(event){
    openPopap(popupList5)
    event.stopPropagation()
})

closePopupList5.addEventListener("click", function(event){
    closePopap(popupList5)
    event.stopPropagation()
})

popupOpenBtnList6.addEventListener("click", function(event){
    openPopap(popupList6)
    event.stopPropagation()
})

closePopupList6.addEventListener("click", function(event){
    closePopap(popupList6)
    event.stopPropagation()
})


//--------------------------------------------------------popup-pod

const popupOpenBtnPod  = document.querySelector('#popup__pod-open')
const popupPod = document.querySelector('.popup-pod')
const closePopupPod = document.querySelector('#close-popup__pod')

const popupOpenBtnListPod1  = document.querySelector('#list-pod_1')
const popupListPod1 = document.querySelector('#popup-button-pod__1')
const closePopupListPod1 = document.querySelector('#close-popup-pod__1')

const popupOpenBtnListPod2  = document.querySelector('#list-pod_2')
const popupListPod2 = document.querySelector('#popup-button-pod__2')
const closePopupListPod2 = document.querySelector('#close-popup-pod__2')

const popupOpenBtnListPod3  = document.querySelector('#list-pod_3')
const popupListPod3 = document.querySelector('#popup-button-pod__3')
const closePopupListPod3 = document.querySelector('#close-popup-pod__3')

const popupOpenBtnListPod4  = document.querySelector('#list-pod_4')
const popupListPod4 = document.querySelector('#popup-button-pod__4')
const closePopupListPod4 = document.querySelector('#close-popup-pod__4')

const popupOpenBtnListPod5  = document.querySelector('#list-pod_5')
const popupListPod5 = document.querySelector('#popup-button-pod__5')
const closePopupListPod5 = document.querySelector('#close-popup-pod__5')

popupOpenBtnPod.addEventListener("click", function(event){
    openPopap(popupPod)
    event.stopPropagation()
})

closePopupPod.addEventListener("click", function(event){
    closePopap(popupPod)
    closePopap(popupListPod1)
    closePopap(popupListPod2)
    closePopap(popupListPod3)
    closePopap(popupListPod4)
    closePopap(popupListPod5)
    event.stopPropagation()
})

popupOpenBtnListPod1.addEventListener("click", function(event){
    openPopap(popupListPod1)
    event.stopPropagation()
})

closePopupListPod1.addEventListener("click", function(event){
    closePopap(popupListPod1)
    event.stopPropagation()
})

popupOpenBtnListPod2.addEventListener("click", function(event){
    openPopap(popupListPod2)
    event.stopPropagation()
})

closePopupListPod2.addEventListener("click", function(event){
    closePopap(popupListPod2)
    event.stopPropagation()
})

popupOpenBtnListPod3.addEventListener("click", function(event){
    openPopap(popupListPod3)
    event.stopPropagation()
})

closePopupListPod3.addEventListener("click", function(event){
    closePopap(popupListPod3)
    event.stopPropagation()
})

popupOpenBtnListPod4.addEventListener("click", function(event){
    openPopap(popupListPod4)
    event.stopPropagation()
})

closePopupListPod4.addEventListener("click", function(event){
    closePopap(popupListPod4)
    event.stopPropagation()
})

popupOpenBtnListPod5.addEventListener("click", function(event){
    openPopap(popupListPod5)
    event.stopPropagation()
})

closePopupListPod5.addEventListener("click", function(event){
    closePopap(popupListPod5)
    event.stopPropagation()
})

const popupBox = document.querySelector('.popup__cont')

popup.addEventListener('click', (event) => {
    const click = event.composedPath().includes(popupBox);
    if  ( !click ) {
        closePopap(popup)
    }
})

const boxPopup2 = document.querySelector('#PopupBox')

popupPod.addEventListener('click', (event) => {
    const click = event.composedPath().includes(boxPopup2);
    if  ( !click ) {
        closePopap(popupPod)
    }
})