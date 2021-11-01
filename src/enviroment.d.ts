declare namespace NodeJS {
    interface ProcessEnv {
        public APISITE:string;
        public NODE_ENV:'development' | 'production';
    }
}