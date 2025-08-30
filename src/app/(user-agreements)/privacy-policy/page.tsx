const PrivacyPolicyPage = () => {
  return (
    <div className="my-4 flex flex-col rounded-lg border p-8">
      <h1 className="mb-4 text-2xl font-bold">Məxfilik Siyasəti</h1>

      <section className="text-sm">
        <h2 className="mb-2 text-xl font-semibold">1. Giriş</h2>
        <p className="mb-2">
          <span className="font-semibold">1.1.</span> Bu Məxfilik Siyasəti
          (Siyasət) istifadəçilərə bildirir ki, 
          <span className="text-gray-900 dark:text-gray-500">
            {" "}
            (https://instagrab.wuaze.com/)
          </span>{" "}
          vebsaytı heç bir şəxsi məlumatı toplamır, saxlamır və ya emal etmir. 
          Vebsaytdan və ya Xidmətdən istifadə etməklə siz şəxsi məlumatların toplanmadığını və saxlanmadığını qəbul edirsiniz.
        </p>
        <p className="mb-2">
          <span className="font-semibold">1.2.</span> Qeyd edək ki, bu
          Siyasət hüquqi tələblərə uyğun olaraq təqdim olunur, baxmayaraq ki,
          Vebsayt və ya Xidmət heç bir şəxsi məlumatı toplamır və saxlamır.
        </p>
      </section>

      {/* <section className="mb-2 text-sm">
        <h2 className="mb-2 text-xl font-semibold">
          2. Üçüncü Tərəf Reklam və Analitika
        </h2>
        <p className="mb-2">
          <span className="font-semibold">2.1.</span> Biz vebsaytda reklam
          yerləşdirmək üçün Google AdSense kimi üçüncü tərəf reklam xidmətlərindən istifadə edirik. 
          Bu üçüncü tərəflər kukilərdən, veb mayaklardan və digər izləmə texnologiyalarından istifadə edərək
          sizin vebsaytdan və digər saytlardan istifadəniz barədə məlumat toplaya bilər, 
          o cümlədən IP ünvanınız, brauzer növünüz, internet provayderiniz, giriş/çıxış səhifələriniz və tarix/vaxt qeydiyyatı. 
          Daha ətraflı məlumat üçün
          <a
            target="_blank"
            href="https://www.privacypolicies.com/blog/privacy-policy-google-adsense/"
            className="text-blue-600 hover:underline"
          >
            {" "}
            privacypolicies.com{" "}
          </a>
          və
          <a
            target="_blank"
            href="https://www.termsfeed.com/blog/privacy-policy-google-adsense/"
            className="text-blue-600 hover:underline"
          >
            {" "}
            termsfeed.com{" "}
          </a>
          saytlarını ziyarət edə bilərsiniz.
        </p>
        <p className="mb-2">
          <span className="font-semibold">2.2.</span> Siz fərdiləşdirilmiş
          reklamlardan imtina etmək üçün
          <a
            target="_blank"
            href="https://adssettings.google.com/authenticated"
            className="text-blue-600 hover:underline"
          >
            {" "}
            Ads Settings{" "}
          </a>
          səhifəsinə keçid edə bilərsiniz.
        </p>
      </section> */}

      <section className="mb-2 text-sm">
        <h2 className="mb-2 text-xl font-semibold">
          2. Məxfilik Siyasətində Dəyişikliklər
        </h2>
        <p className="mb-2">
          <span className="font-semibold">3.1.</span> Biz istənilən vaxt
          bu Siyasətin hər hansı bir hissəsini yeniləmək, dəyişdirmək və ya
          əvəz etmək hüququnu özümüzdə saxlayırıq. Yenilənmiş Siyasət
          vebsaytda dərc ediləcək. Siyasət dəyişikliyindən sonra vebsaytdan və ya xidmətdən istifadə etməyə davam etməniz
          yeni şərtləri qəbul etdiyiniz anlamına gəlir.
        </p>
      </section>

      <section className="mb-2 text-sm">
        <h2 className="mb-2 text-xl font-semibold">3. Əlaqə Məlumatı</h2>
        <p className="mb-2">
          <span className="font-semibold">3.1.</span> Əgər bu Siyasətlə bağlı hər hansı sualınız və ya narahatlığınız varsa, 
          vebsayt sahibinə aşağıdakı ünvandan müraciət edin:{" "}
          <span className="italic">cahadabdulla@gmail.com</span>.
        </p>
      </section>

      <section className="mb-2 text-sm">
        <h2 className="mb-2 text-xl font-semibold">
          4. Məxfilik Siyasətinin Qəbul Edilməsi
        </h2>
        <p>
          Vebsayta və ya Xidmətə daxil olmaqla və ya istifadə etməklə, 
          bu Siyasətin şərtlərini oxuduğunuzu, başa düşdüyünüzü və qəbul etdiyinizi təsdiqləyirsiniz.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
