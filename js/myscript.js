let root = new Vue({
    el: "#root",

    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },

            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

        selectAvatar: 0,   // indice dei contatti
        newMessage: "",   // campo vuoto per la funzione di inserimento nuovi messaggi
        search: "",      // campo vuoto per rendere possibile la ricerca filtrata dei contatti
    },

    // implementazione per la funzione filtro che permette di mantenere l'indice dei contatti
    // a 0 durante la ricerca
    watch: {
        search: function (value) {
            this.selectAvatar = 0;
        }
    },

    methods: {
        
        // funzione che imposta l'indice del contatto che viene cliccato
        selectChat: function (avatarIndex) {
            this.selectAvatar = avatarIndex;
            return this.selectAvatar;
        },

        // funzione per inserire immagine contatto
        filteredImage: function (element) {
            return "img/avatar" + element.avatar + ".jpg";
        },
        
        // funzione che permette di inserire un nuovo messaggio nell'array messaggi
        //  e automaticamente genera una risposta
        addNewMessage: function (selectAvatar) {
            let newTextMessage;
            newTextMessage = {
                date: '10/01/2020 15:32:00',
                text: this.newMessage,
                status: 'sent',
            }
            this.filterChat[selectAvatar].messages.push(newTextMessage);
            this.newMessage = "";

            let newContacts = this.filterChat[selectAvatar];
            setTimeout(function () {
                let newMessageReceived;
                newMessageReceived = {
                    date: '10/01/2020 15:32:01',
                    text: "Ok",
                    status: 'received',
                };

                newContacts.messages.push(newMessageReceived);
            }, 1000);
        },
    },

    // funzione che permette di filtrare i contatti
    computed: {
        filterChat() {
            return this.contacts.filter(element => {
                return element.name.toLowerCase().includes(this.search.toLowerCase());
            });
        },
    },
});
