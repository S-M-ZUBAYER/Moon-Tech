import React from 'react';

const NewCollections = () => {
    return (
        <div>
            <section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">New Collection</h2>

      <p class="mx-auto mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dicta incidunt est ipsam, officia dolor fugit natus?
      </p>
    </header>

    <ul class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <li>
        <a href="#" class="group relative block">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 class="text-xl font-medium text-white">Casual Trainers</h3>

            <span
              class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="group relative block">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 class="text-xl font-medium text-white">Winter Jumpers</h3>

            <span
              class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </a>
      </li>

      <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" class="group relative block">
          <img
            src="https://www.poojaratele.com/media/blog/cache/1100x/magefan_blog/hotselling-phones.jpg"
            alt=""
            class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 class="text-xl font-medium text-white">Skinny Jeans Blue</h3>

            <span
              class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>

        </div>
    );
};

export default NewCollections;