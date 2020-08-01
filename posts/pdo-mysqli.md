---
title: 'PDOとmysqliの違い'
date: '2020-08-01'
---

こんにちは！最近 PHP で MySQL に接続するのに PDO と mysqli があって、どっちを使えばいいんだろうと思って、違いを調べてみました。

結果：mysqli は MySQL でしか使えませんが、PDO はほかのデータベースでも使えるみたいです！

絶対、MySQL にするってとき以外は PDO を使うとよさそうですね！

↓ 以下サンプルコードです
<br>
<br>
<br>

<div style='background: black; color: white;'>

```php
<?php
class DB
{
  private static function connect()
  {
    //データベース作成 new PDO('mysql:host=localhost; dbname=test', $user,$pass);
    $pdo = new PDO('mysql:host=127.0.0.1; dbname=facebook; charset=utf8mb4',
     'root', '');
    //データバンドルの属性設定
    //PDO:ATTR_ERRORMODE:エラーレポート
    //PDO:ERRORMODE_EXCEPTION:例外を投げる
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
  }
  public static function query($query, $params = array())
  {
    //self: インスタンス化せずにstaticで使える　データベース接続準備
    $statement = self::connect()->prepare($query);
    //実行
    $statement->execute($params);
    //explode≒split
    if (explode(' ', $query)[0] == 'SELECT') {
      $data = $statement->fetchAll();
      return $data;
    }
  }
}
?>
```

</div>
