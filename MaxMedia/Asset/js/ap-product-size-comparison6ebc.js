var trackingCall = function (actionString, orientation, size) {
    if (typeof actionString === 'string' && typeof AA_data !== 'undefined') {
        AA_data['filter-sort-option-selection'] = actionString;
        AA_data['filter-option-size'] = size;
        AA_data['filter-option-shape'] = orientation;
        AA_data['filter-products-shown'] = 1;
        AA_data['filter-option-price-range'] = 'NA';
        AA_data['sort-option'] = 'NA';
        AA_data['sort-option-order'] = 'NA';
        var skipTracking = (size === 'S' && orientation === 'portrait');
        if (skipTracking !== !0 && typeof _satellite !== 'undefined' && _satellite !== null) {
            _satellite.track('cms-filter-photobooks')
        }
    }
};
var placePhotobookImage = function ($bookSizeImage) {
    if (window.innerWidth >= 640) {
        var $productSizeComparisonWrapper = $('.product-size-comparison-wrapper'),
            heightOfGradientDiv = $productSizeComparisonWrapper.height(),
            heightOfBookSizeImage = $bookSizeImage[0].getBoundingClientRect().height,
            heightOfButtonArea = $('.product-size-comparison').height();
        if (heightOfGradientDiv > heightOfButtonArea) {
            heightOfGradientDiv = heightOfButtonArea
        }
        var difference = heightOfGradientDiv - heightOfBookSizeImage,
            marginTop = (difference > 0) ? difference : 0,
            wrapperHeight = (heightOfBookSizeImage > heightOfButtonArea) ? heightOfBookSizeImage : heightOfButtonArea;
        var bookSizeImageStyle = {
            'margin-top': marginTop + 'px',
            'opacity': 1
        };
        $bookSizeImage.css(bookSizeImageStyle);
        $productSizeComparisonWrapper.css('height', wrapperHeight + 'px')
    } else {
        var $bookImageContainer = $('.product-size-comparison-image'),
            $bookSizeImageMobile = $('.product-size-comparison-wrapper .book-size-image-mobile'),
            heightOfBookSizeImage = $bookSizeImageMobile[0].height;
        var bookSizeImageMobileStyle = {
            'max-width': $bookImageContainer.width(),
            'opacity': 1
        };
        $bookSizeImageMobile.css(bookSizeImageMobileStyle);
        $bookImageContainer.css('height', heightOfBookSizeImage + 'px')
    }
};
var waitForBookImage = function ($bookSizeImage) {
    if ($bookSizeImage.height() > 1) {
        placePhotobookImage($bookSizeImage);
        $bookSizeImage.fadeTo('fast', 1)
    } else {
        setTimeout(function () {
            waitForBookImage($bookSizeImage)
        }, 250)
    }
};
var setActiveButtons = function (defaultPap) {
    if (typeof productData[defaultPap] !== 'undefined') {
        $('[data-orientation="' + productData[defaultPap].orientation + '"]').addClass('active');
        $('[data-size="' + productData[defaultPap].letterSize + '"]').click();
        if (productData[defaultPap].orientation === 'portrait') {
            $('[data-size="S"]').addClass('disabled')
        }
    }
};
var attachOrientationToSizeButtons = function () {
    var orientation = $('.book-comparison-product-icons i.icon.active').data('orientation');
    $('.button-selection-group a').attr('data-orientation', orientation);
    return orientation
};
var swapImage = function (pap, imgBaseUrl) {
    var productSizeComparisonImage = $('.product-size-comparison-image');
    var oldImg = productSizeComparisonImage.children('.book-size-image');
    var newImg = oldImg.clone();
    var srcSetSizes = ['381', '450', '715'];
    var srcSetAttr = [];
    srcSetSizes.forEach(function (srcSize) {
        srcSetAttr.push(imgBaseUrl + pap + '-' + srcSize + 'w.png ' + srcSize + 'w')
    });
    newImg.attr('srcset', srcSetAttr);
    newImg.attr('src', imgBaseUrl + pap + '-450w.png').hide();
    productSizeComparisonImage.prepend(newImg);
    oldImg.stop(!0).fadeOut(500, function () {
        $(this).remove()
    });
    newImg.fadeIn(800);
    var oldMobileImg = productSizeComparisonImage.children('.book-size-image-mobile');
    var newMobileImg = $(oldMobileImg).clone();
    newMobileImg.attr('src', imgBaseUrl + 'mobile/' + pap + '.png').hide();
    productSizeComparisonImage.prepend(newMobileImg);
    oldMobileImg.stop(!0).fadeOut(500, function () {
        $(this).remove()
    });
    newMobileImg.fadeIn(800)
};
var swapQuickSpecs = function (pap) {
    var $bookComparisonProductSpecifications = $('.book-comparison-product-specifications li');
    if (typeof productData[pap] !== 'undefined') {
        $bookComparisonProductSpecifications.find('.specs-title').text(productData[pap].title);
        $bookComparisonProductSpecifications.find('.specs-dimensions').text(productData[pap].width + ' x ' + productData[pap].height + ' cm');
        $bookComparisonProductSpecifications.find('.specs-price').text(productData[pap].price)
    }
};
var addParameterToUrl = function (url, parameterString) {
    if (parameterString) {
        var isQuestionMarkPresent = url && url.indexOf('?') !== -1;
        var separator = isQuestionMarkPresent ? '&' : '?';
        url += separator + parameterString
    }
    return url
};
var checkUrlAndSetPapId = function (pap, button) {
    var href = button.attr('href');
    var newhref;
    if (href.indexOf('?papId=') !== -1) {
        newhref = href.replace(/\?papId=.+/gi, '?papId=' + pap)
    } else {
        newhref = addParameterToUrl(href, 'papId=' + pap)
    }
    button.attr('href', newhref)
};
var addPAPToDesktopEditorLink = function (pap) {
    var desktopCTAButton = $('a.button.product-size-comparison.size-comparison-desktop');
    var modalCTAButton = $('a#sizeComparisonModalCTA');
    checkUrlAndSetPapId(pap, desktopCTAButton);
    checkUrlAndSetPapId(pap, modalCTAButton)
};
var swapModalSpecs = function (pap) {
    $('.modal_product_specifications tr:not(.noswap)').hide();
    for (var spec in productData[pap]) {
        if (productData[pap].hasOwnProperty(spec)) {
            var spanElement = $('span.spec-' + spec);
            var textElement = $('span.text-' + spec).show();
            if (productData[pap][spec] === null) {
                textElement.hide()
            }
            if (productData[pap].hasOwnProperty(spec) && spanElement.length > 0 && productData[pap][spec] !== null) {
                if (spec !== 'linen_cover_price' && spec !== 'transparent_cover_price') {
                    if (typeof (productData[pap][spec]) === 'string') {
                        spanElement.html(productData[pap][spec].trim())
                    } else {
                        spanElement.html(productData[pap][spec])
                    }
                }
                spanElement.closest('tr').show()
            }
        }
    }
};
var searchObjectForProductMatch = function (orientation, size) {
    for (var pap in productData) {
        if (productData.hasOwnProperty(pap) && orientation === productData[pap].orientation && size === productData[pap].letterSize) {
            return pap
        }
    }
    return !1
};
var swapData = function (orientation, imgBaseUrl, matchedPap) {
    $('.button-selection-group .button.round').removeClass('disabled');
    var activeButtonRound = $('.button.round.active');
    if (orientation === 'portrait') {
        $('[data-size="S"]').addClass('disabled');
        if (activeButtonRound.attr('data-size') === 'S') {
            $('[data-size="M"]').click()
        }
    }
    var size = $('.button.round.active').data('size');
    if (matchedPap) {
        swapImage(matchedPap, imgBaseUrl);
        swapQuickSpecs(matchedPap);
        swapModalSpecs(matchedPap);
        addPAPToDesktopEditorLink(matchedPap)
    }
};
$.preloadImages = function () {
    for (var i = 0; i < arguments.length; i++) {
        $('<img />').attr('src', arguments[i])
    }
};
$(function () {
    var body = $('body'),
        productSizeComparison = $('.product-size-comparison'),
        bookSizeImage = $('.product-size-comparison-wrapper .book-size-image'),
        imgBaseUrl = bookSizeImage.data('imgsrc'),
        defaultPap = productSizeComparison.data('defaultpap');
    if (window.innerWidth < 640) {
        bookSizeImage = $('.product-size-comparison-wrapper .book-size-image-mobile')
    }
    waitForBookImage(bookSizeImage);
    setActiveButtons(defaultPap);
    swapModalSpecs(defaultPap);
    addPAPToDesktopEditorLink(defaultPap);
    attachOrientationToSizeButtons();
    body.on('buttonGroupIconClicked buttonGroupRoundClicked', function (e) {
        var size, orientation, actionString;
        if (e.type === 'buttonGroupIconClicked') {
            size = $('.button.round.active').attr('data-size');
            orientation = attachOrientationToSizeButtons();
            actionString = 'Checked ' + orientation + ' shape'
        } else {
            var activeRoundButton = $('.button.round.active');
            size = activeRoundButton.attr('data-size');
            orientation = activeRoundButton.attr('data-orientation');
            actionString = 'Checked ' + size + ' size'
        }
        var matchedPap = searchObjectForProductMatch(orientation, size);
        if ($('.book-size-image').attr('src').indexOf(matchedPap) === -1) {
            trackingCall(actionString, orientation, size);
            swapData(orientation, imgBaseUrl, matchedPap)
        }
    });
    setTimeout(function () {
        if (window.innerWidth > 640) {
            var imageSetToUse = '-450w';
            if (window.devicePixelRatio > 1) {
                imageSetToUse = '-715w'
            } else if (window.innerWidth < 1024) {
                imageSetToUse = '-381w'
            }
            for (var pap in productData) {
                if (productData.hasOwnProperty(pap)) {
                    $.preloadImages(imgBaseUrl + pap + imageSetToUse + '.png')
                }
            }
        }
    }, 1000)
});
$(window).resize(function () {
    placePhotobookImage($('.product-size-comparison-wrapper .book-size-image'))
})