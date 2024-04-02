
function useProvide<T>(key: string, value: T) {
  provide(key, value);

  return value;
}

function useProvideRef<T>(key: string, value: T) {
  const data = ref(value);

  return useProvide(key, data);
}

export { useProvide, useProvideRef };
