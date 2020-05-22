$(function(){
  // カテゴリーセレクトボックスのオプションを作成
  function appendOption(category){
    var html = `<option value="${category.id}" data-category="${category.id}">${category.name}</option>`;
    return html;
  }
  // 子カテゴリーの表示作成
  function appendChidrenBox(insertHTML){
    var childSelectHtml = '';
    childSelectHtml = `<select class="box__input" id="child_category" name="item[category]">
                          <option value="">選択してください</option>
                          ${insertHTML}
                       </select>`;
    $('.form__group').append(childSelectHtml);
  }
  // 孫カテゴリーの表示作成
  function appendGrandchidrenBox(insertHTML){
    var grandchildSelectHtml = '';
    grandchildSelectHtml = `<select class="box__input" id="grandchild_category" name="item[category_id]">
                              <option value="">選択してください</option>
                              ${insertHTML}
                            </select>`;
    $('.form__group').append(grandchildSelectHtml);
  }
  // 親カテゴリー選択後のイベント
  $('#parent_category').on('change', function(){
    var parentId = document.getElementById('parent_category').value; //選択された親カテゴリーの名前を取得
    if (parentId != ""){ //親カテゴリーが初期値でないことを確認
      $.ajax({
        url: '/items/get_category_children',
        type: 'GET',
        data: { parent_id: parentId },
        dataType: 'json'
      })
      .done(function(children){
        $('#child_category').remove(); //親が変更された時、子以下を削除するする
        $('#grandchild_category').remove();
        $('#size_wrapper').remove();
        $('#brand_wrapper').remove();
        var insertHTML = '';
        children.forEach(function(child){
          insertHTML += appendOption(child);
        });
        appendChidrenBox(insertHTML);
      })
      .fail(function(){
        alert('カテゴリー取得に失敗しました');
      })
    }else{
      $('#child_category').remove(); //親カテゴリーが初期値になった時、子以下を削除するする
      $('#grandchild_category').remove();
      $('#size_wrapper').remove();
      $('#brand_wrapper').remove();
    }
  });
  // 子カテゴリー選択後のイベント
  $('.form__group').on('change', '#child_category', function(){
    // var childId = $('#child_category option:selected').data('category'); //選択された子カテゴリーのidを取得
    var childId = document.getElementById('child_category').value; //選択された親カテゴリーの名前を取得
    if (childId != ""){ //子カテゴリーが初期値でないことを確認
      $.ajax({
        url: '/items/get_category_grandchildren',
        type: 'GET',
        data: { child_id: childId },
        dataType: 'json'
      })
      .done(function(grandchildren){
        if (grandchildren.length != 0) {
          $('#grandchild_category').remove(); //子が変更された時、孫以下を削除するする
          $('#size_wrapper').remove();
          $('#brand_wrapper').remove();
          var insertHTML = '';
          grandchildren.forEach(function(grandchild){
            insertHTML += appendOption(grandchild);
          });
          appendGrandchidrenBox(insertHTML);
        }
      })
      .fail(function(){
        alert('カテゴリー取得に失敗しました');
      })
    }else{
      $('#grandchild_category').remove(); //子カテゴリーが初期値になった時、孫以下を削除する
      $('#size_wrapper').remove();
      $('#brand_wrapper').remove();
    }
  });
});





$(document).ready(function () {
  var count = $('.show-image').length;
  if (count > 5) {
    count = 5;
  }
  $('.owl-carousel').owlCarousel({
    center: true,
    items: count,
    loop: true,
    margin: 5,
    nav: true,
    stagePadding: 10,
  });
});

