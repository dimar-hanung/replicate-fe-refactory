<template>
  <div>
    <primary-header backgroundImage="courses-page.jpg">
      <div class="text-center container w-max-540 mx-auto pt-24 pb-64 ">
        <div class="text-4xl font-bold pb-4">
          Tingkatkan
          <span class="text-primary-active font-bold">skill pemrograman </span
          >kapan pun, dimana pun.
        </div>
        <div class="pb-8">
          We’re a brand of passionate software engineers and educators with an
          engaging curriculum backed by real-world software projects ready to
          boost your career.
        </div>
        <div class="flex">
          <div class="font-bold btn-primary --solid mr-4">
            Masuk & Memulai Belajar
          </div>
          <div class="font-bold btn-primary">Daftar Sekarang</div>
        </div>
      </div>
    </primary-header>
    <div class="container w-max-1140 mx-auto pt-24 px-16 pb-16">
      <div class="flex">
        <div class="w-1/4">
          <div class="text-3xl">
            Bagaimana Refactory Course membantu meningkatkan skill anda.
          </div>
          <div class="py-8">
            <div class="btn-primary --solid text-white font-bold">
              Pelajari Lebih
            </div>
          </div>
        </div>
        <div class="w-3/4 pl-56">
          <img src="@/assets/static/content/courses-1.png" alt="" />
        </div>
      </div>
    </div>
    <div class="bg-secondary-gray">
      <div class="flex container w-max-1140 mx-auto">
        <div class="w-1/2 px-16">
          <div class="text-2xl font-bold pb-4 pt-16">
            Kursus pemrograman untuk semua orang tanpa terkecuali
          </div>
          <div class="text-primary-gray">
            <p>
              Refactory Course dirancang untuk memudahkan setiap orang mampu
              meningkatkan keahlian dalam software engineering tanpa dibatasi
              oleh kesulitan akses, kesulitan waktu, batasan keahlian, ataupun
              usia.
            </p>
            <p>
              Dengan pembelajaran berdasarkan pengalaman nyata pengerjaan
              project, bagi pelajar/mahasiswa, Refactory Course akan melengkapi
              keahlian yang sudah diperoleh dalam studi sehingga dapat membuka
              kesempatan tak terbatas pada karir software engineering.
            </p>
            <p>
              Bagi karyawan atau tenaga profesional, Refactory Course dapat
              meningkatkan keahlian software engineer dalam menunjang
              menyelesaikan tugas pekerjaannya tanpa khawatir dengan
              keterbatasan waktu.
            </p>
            <p>
              Masyarakat secara luas juga dapat memanfaatkan pembelajaran untuk
              meningkatkan keahlian sehingga mampu berkarya dan mendapat
              keuntungan karir tanpa khawatir mahalnya belajar.
            </p>
          </div>
          <div class="btn-primary --solid font-bold text-white">
            Pelajari Lebih
          </div>
        </div>
        <div class="w-1/2">
          <img src="@/assets/static/content/courses-2.jpg" alt="" />
        </div>
      </div>
      <div class="pt-32 pb-16 text-center">
        <div class="py-4 text-primary-gray">MEET OUR GRADUATES</div>
        <div class="font-bold text-3xl">Review</div>
        <div class="text-2xl">
          Read what our alumni said on
          <span class="font-bold">Course Report</span>
        </div>
      </div>
    </div>
    <div class="pt-4 px-32 container w-max-1140 mx-auto pb-16">
      <div class="flex">
        <div class="px-4 w-1/2">
          <div class="p-8 shadow-3xl">
            <div>
              <img src="@/assets/static/content/courses-3.jpg" alt="" />
            </div>
            <div>
              <div class="text-2xl pt-8">MUHAMMAD FIRHAT</div>
              <div class="text-primary-gray font-bold pt-4">Student</div>
              <div class="text-primary-active text-xl py-8" title="5/5">
                <font-awesome :icon="['fa', 'star']" />
                <font-awesome :icon="['fa', 'star']" />
                <font-awesome :icon="['fa', 'star']" />
                <font-awesome :icon="['fa', 'star']" />
                <font-awesome :icon="['fa', 'star']" />
              </div>
            </div>
            <div class="text-xl font-bold">Recommended Bootcamp</div>
            <div class="pt-4">
              Refactory adalah <i>game changer</i> untuk belajar pemrograman.
              Kalau Anda yakin pada karir pemrograman, Refactory harus menjadi
              tempat pertama yang Anda tuju. Anda akan dilatih oleh Mentor yang
              Ahli di bidangnya. Refactory tidak hanya memberikan kurikulum
              terbaru, tetapi juga akan meberikan pengalaman studi kasus dan
              lingkungan pemrograman secara <i>real</i> menyesuaikan dunia
              bisnis saat ini. Refactory memang luar biasa!
            </div>
          </div>
        </div>
        <div class="px-4 w-1/2 ">
          <div class="p-8 shadow-3xl h-full">
            <div>
              <img src="@/assets/static/content/courses-4.jpg" alt="" />
            </div>
            <div>
              <div class="text-2xl pt-8">ERDIANSYAH</div>
              <div class="text-primary-gray font-bold pt-4">
                Head of Developer in MNC
              </div>
              <div class="text-primary-active text-xl py-8" title="5/5">
                <font-awesome :icon="['fa', 'star']" />
                <font-awesome :icon="['fa', 'star']" />
                <font-awesome :icon="['fa', 'star']" />
                <font-awesome :icon="['fa', 'star']" />
                <font-awesome :icon="['fa', 'star']" />
              </div>
            </div>
            <div class="text-xl font-bold">Recommended Bootcamp</div>
            <div class="pt-4">
              Di Refactory saya mendapatkan lebih banyak dari standar saya. Saya
              tidak pernah membayangkan hanya dalam tiga bulan saya memiliki
              akun GitHub dengan kontribuasi lebih dari 500 poin dari yang
              sebelumnya tidak aktif. Saya terlibat dalam
              <i>4 real project </i>besar dari <i>client</i> internasional. Saya
              juga dapat memberikan beberapa kontribusi untuk proyek
              <i>open source</i>, dan itu menyenangkan.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-16 text-center flex justify-center bg-banner text-white">
      <div class="pr-4 text-2xl">
        Ready to start Learning?
      </div>
      <div class="btn-primary --solid font-bold">Daftar Sekarang</div>
    </div>
    <div class="py-8 text-center">
      <div class="text-primary-active text-xl font-bold py-4">
        LANGKAH MUDAH
      </div>
      <div class="font-bold text-2xl">
        Memulai Belajar di <br />
        Refactory Course
      </div>
      <div class="py-4">
        <img
          class="block mx-auto"
          src="@/assets/static/content/courses-5.png"
          alt=""
        />
      </div>
      <div class="btn-primary --solid text-white mx-auto">
        Pelajari Lebih
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
