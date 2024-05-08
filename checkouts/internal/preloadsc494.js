
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.dfa68570996d22ce41a6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/699.baseline.en.f32e514f786d9948508f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/723.baseline.en.4e74c9d386be1720f0fd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/137.baseline.en.c9f3e54905e2cc4deaff.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.1a692fbe1a50685246ae.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/977.baseline.en.ced19ebca9f312cb8c0c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/539.baseline.en.dfb95250bd52c6f905a3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/582.baseline.en.d192ee6ceb50b7df305d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/927.baseline.en.d52963cebed50f376c29.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2.baseline.en.01ba3d3d29f1a32c21c4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/387.baseline.en.9e8e02d725230ae42deb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.7699867912bdb39b0029.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/699.baseline.en.42acfc4d3349b98feb91.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.b33fe50d6fdb42d0dcda.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.baseline.en.dfe89547f262e836b840.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com","https://cdn.shopify.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/inter/inter_n4.481bd4d19704ca98fb1d3abd50c668b6962860a2.woff2?h1=YWxwaGFsZXRlYXRobGV0aWNzLmNvbQ&hmac=adaa36d51a5a7736204c4b097a4f0fa2259623932dfa4dc4cf372401e796ae97","https://fonts.shopifycdn.com/inter/inter_n7.50ef4139896edec0637fde057914fbf7e3a8d56e.woff2?h1=YWxwaGFsZXRlYXRobGV0aWNzLmNvbQ&hmac=829ef827d639b0705478eca022922e6981eef53f9fb604396e1f8ded0e671f0b","https://cdn.shopify.com/s/files/1/0667/0133/files/GT-America-Expanded-Black.woff2?v=1694125953"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0667/0133/files/Alphalete_Main_Wordmark_logo_e5276cb5-e652-484b-a31c-a8f207cf7820_x320.png?v=1613691853"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  