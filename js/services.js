const callProducts = (url, callbackFunc = () => {}) => {

    $.ajax({
        url,
        success: (result) => {
            callbackFunc(result);
        }
    });

}