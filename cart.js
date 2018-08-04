function renderGoodsList() {
  $('#goods').empty();
  $.get('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json', {}, function(goods) {
    var $ul = $('<ul />');
    goods.forEach(function(item) {
      $ul.append(
        $('<li />', {
          text: item.product_name + ' ' + item.price + ' rub.'
        })
        .append(
          $('<button />', { 
            text: 'Buy',
            'data-id': item.id,
            'data-price': item.price,
            'data-name': item.product_name,
          })
        )
    )
    });
    $('#goods').append($ul);
  }, 'json');
}

function renderCart() {
  $('#cart').empty();
  $.get('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json', {}, function(goods) {
    var $ul = $('<ul />');
    var total = 0;
    goods.forEach(function(item) {
      $ul.append(
        $('<li />', {
          text: item.product_name + ' (' + item.quantity + ')'
        })
        .append(
          $('<button />', { 
            text: 'Remove',
            'data-id': item.id,
            'data-price': item.price,
            'data-name': item.product_name,
            'data-quantity': item.quantity
          })
        )
      );
      total += +item.quantity * +item.price;
    });
    $('#cart').append($ul);
    $('#cart').append($('<div />', { text: 'Total: ' + total + ' rub.' }))
  }, 'json');
}
/////////////////////
function OneDelete(quantity){
	$('#cart').on('click', 'li button', function(event) {
      var good = {
        id: $(this).attr('data-id'),
        price: $(this).attr('data-price'),
        name: $(this).attr('data-name'),
        }
		good.quantity--;
		$.ajax({
          type: 'DELETE',
          url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
          data: { quantity: +$good.attr('data-quantity') - 1 },
          success: function() {
            renderCart();
          },
}};
};

////////////////////
(function($) {
  $(document).ready(function() {
    renderGoodsList();
    renderCart();

    $('#cart').on('click', 'li button', function(event) {
      $.ajax({
        type: 'DELETE',
        url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json' + $(this).attr('data-id'),
        success: function() {
          renderCart();
        }
      })
    });

    $('#goods').on('click', 'li button', function(event) {
      var good = {
        id: $(this).attr('data-id'),
        price: $(this).attr('data-price'),
        name: $(this).attr('data-name'),
        quantity: 1
      }
      if ($('#cart li button[data-id="' + good.id + '"]').length) {
        var $good = $('#cart li button[data-id="' + good.id + '"]');

        $.ajax({
          type: 'PATCH',
          url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json' + good.id,
          data: { quantity: +$good.attr('data-quantity') + 1 },
          success: function() {
            renderCart();
          }
        });
      } else {
        $.ajax({
          type: 'POST',
          url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
          data: good,
          success: function() {
            renderCart();
          }
        });
      }
      event.preventDefault();
    })
  })
})(jQuery);