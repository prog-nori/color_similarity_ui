/**
 * 与えられた引数をもとにAPIのアクセスURLを生成する
 * 
 * @param paths パス（分割された）
 * @returns APIのURL
 */
export const getApiPrefix = (...paths: (string|number|boolean)[]): string => {
    console.log(process.env.REACT_APP_API_BASE_URL)
    const baseURL = `${process.env.REACT_APP_API_BASE_URL}/servicies/v2`
    paths.unshift(baseURL)
    return paths.join('/')
}